
const form = document.querySelector('#form');
const Name = document.querySelector('#Name');
const EmailAddress = document.querySelector('#EmailAddress');
const Subject = document.querySelector('#Subject');
const TextArea = document.querySelector('#TextArea');

const nameError =  document.querySelector('.nameError');
const emailError =  document.querySelector('.emailError');
const SubjectError =  document.querySelector('.subjectError');
const TextAreaError =  document.querySelector('.TextAreaError');

form.addEventListener('submit', (e) => {
  if (Name.value === '' || Name.value == null) 
      { e.preventDefault(); nameError.innerHTML = 'Kindly enter your Name!'; }

  if (EmailAddress.value === '' || EmailAddress.value == null) 
    { e.preventDefault(); emailError.innerHTML = 'Kindly enter your Email Address!'; }

  if (Subject.value === '' || Subject.value == null) 
    { e.preventDefault(); SubjectError.innerHTML = 'Kindly enter a subject!'; }

  if (TextArea.value === '' || TextArea.value == null) 
    { e.preventDefault(); TextAreaError.innerHTML = 'Type your complaint or request here'; }

});
