class BookReview {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.notes = [];
        this.rating = null;
    }
    addNotes(page, note) {
        this.notes[page] = this.notes[page] ? `${this.notes[page]} ${note}` : note;
    }
    addRating(rating) {
        if(rating > 5 || rating < 0) throw new Error('Rating is between 0 and 5');
        this.rating = rating;
    }
}
module.exports = { BookReview };
