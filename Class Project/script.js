document.addEventListener("DOMContentLoaded", function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthPicker = document.getElementById('month-picker');
    const yearPicker = document.getElementById('year');
    const calendarDays = document.querySelector('.calendar-days');
    const timeFormat = document.querySelector('.time-formate');
    const dateFormat = document.querySelector('.date-formate');

    function updateCalendar(month, year) {
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startingDay = firstDayOfMonth.getDay();

        calendarDays.innerHTML = '';

        for (let i = 0; i < startingDay; i++) {
            const dayElement = document.createElement('div');
            calendarDays.appendChild(dayElement);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = i;
            calendarDays.appendChild(dayElement);
        }

        monthPicker.textContent = monthNames[month];
        yearPicker.textContent = year;
    }

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const month = monthNames[now.getMonth()];
        const year = now.getFullYear();

        timeFormat.textContent = `${hours}:${minutes}:${seconds}`;
        dateFormat.textContent = `${day} - ${month} - ${year}`;
    }

    // Initial setup
    updateCalendar(currentMonth, currentYear);
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);

    // Event listeners for changing month and year
    document.getElementById('pre-year').addEventListener('click', function() {
        currentYear--;
        updateCalendar(currentMonth, currentYear);
    });

    document.getElementById('next-year').addEventListener('click', function() {
        currentYear++;
        updateCalendar(currentMonth, currentYear);
    });

    // Add event listeners for changing month

    // Note: You should implement event listeners to change the month
    // when the user clicks on the previous or next buttons.
});
   // Function to add reminder
   function addReminder() {
    const reminderDate = prompt("Enter reminder date (format: DD-MM-YYYY):");
    const reminderDat = prompt("Enter what you want to set");
    if (reminderDate) {
        // Here you can save the reminder date and perform necessary operations
        alert(`Reminder set for ${reminderDate}`);
    }
}

// // Add event listener to the reminder button
// const reminderButton = document.createElement( 'button');
// reminderButton.textContent = 'Add Reminder';
// reminderButton.classList.add('reminder-button');
// reminderButton.addEventListener('click', addReminder);

// // Append the reminder button to the calendar footer
// const calendarFooter = document.querySelector('.calendar-footer');
// calendarFooter.appendChild(reminderButton);


