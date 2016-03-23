// Get data from localStorage
function fetchArray(key) {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }
    return [];
}

// Persist data to localStorage
function saveArray(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

var vue = new Vue({

    // We want to target the div with an id of 'notes'
    el: '#notes',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        note: { title: '', content: '' },
        notes: fetchArray('notes')
    },

    // Anything within the ready function will run when the application loads
    ready: function() {
        // Watch for changes and persist to localStorage
        this.$watch('notes', function(value) {
            saveArray('notes', value);
        });
    },

    // Methods we want to use in our application are registered here
    methods: {

        // Adds note to the existing notes array
        addNote: function() {
            if (this.note.title) {
                // Push note to array of notes
                this.notes.push(this.note);
                // Reset fields
                this.note = { title: '', content: '' };
            }
        },

        // Delete note
        deleteNote: function(index) {
            // Ask for confirmation
            if (confirm('You are about to delete this note.\nAre you sure?')) {
                this.notes.splice(index, 1);
            }
        }

    }

});
