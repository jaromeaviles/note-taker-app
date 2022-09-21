let notes = [];

// Keep the form from submitting

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
});

let noteBody = document.querySelector('.note-body');
let footer = document.querySelector('footer');

// Display Notes

function displayNotes() {

  for (let i = 0; i < notes.length; i++) {
    let index = i + 1;
    let div = document.createElement("div");
    let heading = document.createElement("h5");
    heading.style.marginTop = '20px';
    let para = document.createElement("p");
    para.textContent = notes[i];
    heading.textContent = `Note ${index}`;

    // creation of button modal

    let buttonModal = document.createElement('button');
    buttonModal.textContent = 'View Details';
    buttonModal.classList.add('btn', 'btn-primary');
    buttonModal.setAttribute('data-bs-toggle', 'modal');
    buttonModal.setAttribute('data-bs-target', `#modal${i}`);

     // appending all to div
     div.classList.add('col-lg-6', 'col-12');
     div.append(heading);
     div.append(para);
     div.append(buttonModal);
     noteBody.append(div);

    // creation of Modal

    let divModal = document.createElement('div');
    divModal.classList.add('modal', 'fade');
    divModal.setAttribute('id', `modal${i}`);
    divModal.setAttribute('tabindex', '-1');
    divModal.setAttribute('aria-labelledby', `modal${i}`);
    divModal.setAttribute('aria-hidden', 'true');

    // Modal Dialog
    let modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog', 'modal-dialog-centered', 'modal-dialog-scrollable'); 

    // Modal Content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Modal Body

    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // content

    let modalNote = document.createElement('p');
    modalNote.style.marginBottom = '0';
    modalNote.textContent = notes[i];


    // Appending to footer
    modalBody.append(modalNote);
    modalContent.append(modalBody);
    modalDialog.append(modalContent);
    divModal.append(modalDialog);
    footer.append(divModal);

  }
}

// Add Notes!

const addNotes = document.querySelector('.button-add-notes');

addNotes.addEventListener('click', () => {

    let input = document.querySelector('#noteInput');
    
    if (input.value === '') {
        return;
    }

    notes.push(input.value);
    input.value = '';
    noteBody.replaceChildren();
    displayNotes();
});
