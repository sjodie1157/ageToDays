let dateInput = document.querySelector('[data-date]')
let output= document.querySelector('[data-output]');
dateInput.addEventListener('change', ( ) => {
    let birthDate = new Date(dateInput.value);
    let currenDate = new Date ( );
    let newDate = new Date( currenDate - birthDate);
    let years = newDate.getFullYear( ) - 1970;
    let months = newDate.getMonth( );
    let days = newDate.getDate( ) -1;
    output.textContent = `${years} years ${months} months ${days} days old.` ;
})