class NotesPage {
  
    deleteAllNotes() {
      cy.get('[data-testid="notes-list"]').then(($body) => {
        if ($body.find('[data-testid="note-card"]').length > 0) {
          cy.get('[data-testid="note-card"]').each(($el) => {
            cy.wrap($el)
              .find('[data-testid="note-delete"]')
              .click()
              .get('[data-testid="note-delete-confirm"]')
              .click();
          });
        }
      });
    }
  
    addNewNote() {
      cy.get('[data-testid="add-new-note"]').click();
    }
  
    selectCategory(category) {
      cy.get('[data-testid="note-category"]').select(category);
    }
  
    fillNoteTitle(title) {
      cy.get('[data-testid="note-title"]').type(title);
    }
  
    fillNoteDescription(description) {
      cy.get('[data-testid="note-description"]').type(description);
    }
  
    submitNote() {
      cy.get('[data-testid="note-submit"]').click();
    }
  
    verifyNoteInCategory(category, title, description) {
      cy.get(`[data-testid="category-${category}"]`).click();
      cy.contains(title).should("exist");
      if (description) {
        cy.contains(description).should("exist");
      }
    }
  
    verifyNoteCompletionStatus(color) {
      cy.get('[data-testid="toggle-note-switch"]').should(
        "have.css",
        "background-color",
        color
      );
    }
  
    checkCompleted() {
      cy.get('[data-testid="note-completed"]').check();
    }
  
    uncheckCompleted() {
      cy.get('[data-testid="note-completed"]').uncheck();
    }
  }
  
  export default new NotesPage();