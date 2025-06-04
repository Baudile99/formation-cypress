import loginPage from "./pages/loginPage";
import notesPage from "./pages/notesPage";
 
describe("Creation and Verification of Note", () => {
  beforeEach(() => {
    // Visiter la page de login et se connecter
    loginPage.visit();
 
    cy.fixture("user").then((user) => {
      loginPage.login(user.validUser.email, user.validUser.password);
      loginPage.verifHomePage();
    });
 
    // Supprimer toutes les notes existantes
 
    notesPage.deleteAllNotes();
    // Cliquer sur le bouton pour ajouter une nouvelle note
    notesPage.addNewNote();
  });
 
  it("Creates a note in the Home category and checks its presence in Home and All tabs", () => {
    notesPage.selectCategory("Home");
    notesPage.checkCompleted();
    notesPage.fillNoteTitle("Home Note Title");
    notesPage.fillNoteDescription("This is a note for the Home category.");
    notesPage.submitNote();
 
    notesPage.verifyNoteInCategory("all", "Home Note Title");
    notesPage.verifyNoteInCategory(
      "home",
      "Home Note Title",
      "This is a note for the Home category."
    );
    notesPage.verifyNoteCompletionStatus("rgb(0, 0, 255)");
  });
 
  it("Creates a note in the Home category without checking the 'completed' checkbox and verifies its presence", () => {
    notesPage.selectCategory("Home");
    notesPage.fillNoteTitle("Home Note Title Without Completion");
    notesPage.fillNoteDescription("This is a note for the Home category without checking the completed checkbox.");
    notesPage.submitNote();
 
    notesPage.verifyNoteInCategory("all", "Home Note Title Without Completion");
    notesPage.verifyNoteInCategory(
      "home",
      "Home Note Title Without Completion",
      "This is a note for the Home category without checking the completed checkbox."
    );
    notesPage.verifyNoteCompletionStatus("rgba(0, 0, 0, 0)");
  });
});