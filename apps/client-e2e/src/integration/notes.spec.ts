import { CyHttpMessages, Interception } from 'cypress/types/net-stubbing';

describe('notes', () => {
  beforeEach(() => {
    cy.visit('#/notes');
    cy.clearLocalStorage();
  });

  describe('1. Default state', () => {
    it('1.1 The web page displays a right count of elements', () => {
      cy.intercept('POST', '/note/getList', { fixture: 'notes.json' });
      cy.reload();
      cy.get('app-note').should('have.length', 10);
    });

    it('1.2 Start date contain a first day of a month', () => {
      const startDate: Date = new Date();
      startDate.setDate(1);

      cy.get('input[formcontrolname="createStartDate"]').should(
        'have.value',
        `${
          startDate.getMonth() + 1
        }/${startDate.getDate()}/${startDate.getFullYear()}`
      );
    });

    it('1.2 End date contain a current date', () => {
      const endDate: Date = new Date();

      cy.get('input[formcontrolname="createEndDate"]').should(
        'have.value',
        `${
          endDate.getMonth() + 1
        }/${endDate.getDate()}/${endDate.getFullYear()}`
      );
    });

    it('1.3 The view mode by default is a lines', () => {
      cy.get('app-notes-view .grid').should('have.class', 'lines');
    });
  });

  describe('2. Sort', () => {
    it('2.1 The first element before sorting and the last element after it is equals', () => {
      cy.intercept(
        'POST',
        '/note/getList',
        (req: CyHttpMessages.IncomingHttpRequest) => {
          req.body = {
            ...req.body,
            pagination: { first: 0, max: 999 },
          };
        }
      ).as('api');

      cy.get('input[formcontrolname="createStartDate"]')
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('2/1/2021');
      cy.get('input[formcontrolname="createEndDate"]')
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('2/28/2021{enter}');

      cy.wait('@api').then((interceptDesc: Interception) => {
        const noteDesc = interceptDesc.response?.body.notes[0];

        cy.get('app-notes-sort fa-icon').click();

        cy.wait('@api').then((interceptAsc: Interception) => {
          const noteAsc = interceptAsc.response?.body.notes.pop();

          expect(noteDesc.id).equal(noteAsc.id);
        });
      });
    });
  });

  describe('3. Pagination', () => {
    it('3.1 When load all notes load more button will disappear', () => {
      cy.intercept('POST', '/note/getList').as('api');

      cy.get('input[formcontrolname="createStartDate"]')
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('2/1/2021');
      cy.get('input[formcontrolname="createEndDate"]')
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('2/28/2021{enter}');

      cy.wait('@api').then((intercept: Interception) => {
        const totalCount: number = intercept.response?.body.totalCount;

        for (let i = 1; i < Math.ceil(totalCount / 10); i++) {
          cy.get('app-notes-view-paginator button').click();
          cy.wait('@api');
        }

        cy.get('app-notes-view-paginator button').should('not.exist');
      });
    });
  });

  describe('4. View Mode', () => {
    it('4.1 When clicked to button small tiles max notes in a row should be equal 4', () => {
      cy.get('app-notes-view-mode fa-icon').its(1).click();
      cy.get('app-notes-view .grid').should('have.class', 'small-tiles');
    });

    it('4.1 When clicked to button big tiles max notes in a row should be equal 2', () => {
      cy.get('app-notes-view-mode fa-icon').its(2).click();
      cy.get('app-notes-view .grid').should('have.class', 'big-tiles');
    });
  });

  describe('5. Workflow', () => {
    it('5.1 When clicked to plus button the note should be created', () => {
      cy.intercept('POST', '/note/getList').as('api');

      cy.get(
        'app-create-note app-note-edit-form textarea[formcontrolname="title"]'
      )
        .clear()
        .type('Title 1');
      cy.get(
        'app-create-note app-note-edit-form textarea[formcontrolname="message"]'
      )
        .clear()
        .type('Message 1');

      cy.wait(200);

      cy.get('app-create-note .note-actions-create').click();

      cy.wait('@api').then(() => {
        cy.get('app-note .title').first().should('have.text', 'Title 1');
        cy.get('app-note .message').first().should('have.text', 'Message 1');
      });
    });

    it('5.2 When trying to edit a form and click to the cancel button the value should be return to initial value', () => {
      cy.get('app-note .title')
        .first()
        .invoke('text')
        .then((titleText: string) => {
          cy.get('app-note .message')
            .first()
            .invoke('text')
            .then((messageText: string) => {
              cy.get('app-note .note-actions-edit').first().click();

              cy.get(
                'app-note app-note-edit-form textarea[formcontrolname="title"]'
              )
                .clear()
                .type('Title 2');

              cy.get(
                'app-note app-note-edit-form textarea[formcontrolname="message"]'
              )
                .clear()
                .type('Message 2');

              cy.wait(200);

              cy.get('app-note .note-actions-cancel').click();

              cy.wait(200);

              cy.get('app-note .title').first().should('have.text', titleText);
              cy.get('app-note .message')
                .first()
                .should('have.text', messageText);
            });
        });
    });

    it('5.3 When trying to edit a form and click to the save button the value should be saved', () => {
      cy.intercept('PATCH', '/note').as('api');

      cy.get('app-note .note-actions-edit').first().click();

      cy.get('app-note app-note-edit-form textarea[formcontrolname="title"]')
        .clear()
        .type('Title 3');

      cy.get('app-note app-note-edit-form textarea[formcontrolname="message"]')
        .clear()
        .type('Message 3');

      cy.wait(200);

      cy.get('app-note .note-actions-save').click();

      cy.wait('@api').then((intercept: Interception) => {
        const note = intercept.response?.body;

        expect(note.title).equal('Title 3');
        expect(note.message).equal('Message 3');
      });
    });

    it('5.4 When clicked to remove button the note should be removed', () => {
      cy.intercept('POST', '/note/getList').as('api');
      cy.reload();

      cy.wait('@api').then((intercept: Interception) => {
        const id = intercept.response?.body.notes[0]?.id;

        cy.get('app-note .note-actions-remove').first().click();

        cy.wait('@api').then((interceptRemoved: Interception) => {
          const expectedId = interceptRemoved.response?.body.notes[0]?.id;

          expect(id).not.equal(expectedId);
        });
      });
    });
  });
});
