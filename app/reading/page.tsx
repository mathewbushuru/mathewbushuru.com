export const metadata = {
  title: "Mathew Bushuru | Books",
};

export default function ReadingPage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        Reading
      </h1>

      <p className="mb-4 leading-7 lg:mb-6">
        In this space, I keep a collection of books I have read recently. Since
        completing university, finding time to read has been a bit of a juggle,
        but I still manage to squeeze in some reading here and there. Most of
        the stuff I read these days is technical, including revisiting text
        books from my college courses and exploring new programming books.
        However, I do dive into some fiction every now and then. So if you're
        curious about stuff that interests me, please take a look around!
      </p>

      {readBooks.map((book, index) => (
        <p key={index} className="mb-4 leading-7 lg:mb-6">
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline hover:underline-offset-4"
          >
            {book.name}
          </a>{" "}
          by {book.authors}{" "}
          <span className="font-mono">[Finished {book.finishDate}]</span>.
        </p>
      ))}
    </div>
  );
}

const readBooks = [
  {
    name: "C++20 For Programmers, An Objects Natural Approach",
    authors: "Paul Deitel, and Harvey Deitel",
    finishDate: "Jan 2024",
    link: "https://deitel.com/c-plus-plus-20-for-programmers/",
  },
  {
    name: "Java Foundations: Introduction to Program Design and Data Structures, 5th Edition",
    authors: "John Lewis",
    finishDate: "Dec 2023",
    link: "https://www.pearson.com/en-us/subject-catalog/p/java-foundations-introduction-to-program-design-and-data-structures/P200000003413/9780137518401",
  },
  {
    name: "Java How To Program, Early Objects 11th edition",
    authors: "Paul Deitel, and Harvey Deitel",
    finishDate: "Oct 2023",
    link: "https://deitel.com/java-how-to-program-11-e-early-objects-version/",
  },
  {
    name: "Python for Programmers with Introductory AI Case Studies",
    authors: "Paul Deitel, and Harvey Deitel",
    finishDate: "Sep 2023",
    link: "https://deitel.com/python-for-programmers-book/",
  },
  {
    name: "Head First Java, 3rd Edition",
    authors: "Kathy Sierra, Bert Bates, and Trisha Gee",
    finishDate: "Sep 2023",
    link: "https://www.oreilly.com/library/view/head-first-java/9781492091646/",
  },
  {
    name: "How Not To Be Wrong - The Power Of Mathematical Thinking",
    authors: "Jordan Ellenberg",
    finishDate: "Jul 2023",
    link: "https://www.jordanellenberg.com/book/how-not-to-be-wrong/",
  },
  {
    name: "A Doll's House",
    authors: "Henrik Ibsen",
    finishDate: "Jul 2023",
    link: "https://en.wikipedia.org/wiki/A_Doll%27s_House",
  },
  {
    name: "The Pearl",
    authors: "John Steinbeck",
    finishDate: "Jun 2023",
    link: "https://en.wikipedia.org/wiki/The_Pearl_(novella)",
  },
  {
    name: "The Caucasian Chalk Circle",
    authors: " Bertolt Brecht",
    finishDate: "Jun 2023",
    link: "https://en.wikipedia.org/wiki/The_Caucasian_Chalk_Circle",
  },
  {
    name: "React Key Concepts",
    authors: "Maximilian Schwarzmüller",
    finishDate: "Mar 2023",
    link: "https://www.packtpub.com/en-gb/product/react-key-concepts-9781803234502?=type=ebook#toc",
  },
  {
    name: "Web Development with Node and Express, 2nd Edition",
    authors: "Ethan Brown",
    finishDate: "Mar 2023",
    link: "https://www.oreilly.com/library/view/web-development-with/9781492053507/",
  },
  {
    name: "Learning React, 2nd Edition",
    authors: "Alex Banks, and Eve Porcello",
    finishDate: "Feb 2023",
    link: "https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/",
  },
  {
    name: "Frankenstein: The 1818 Text",
    authors: "Mary Shelley",
    finishDate: "Aug 2022",
    link: "https://www.penguinrandomhouse.com/books/557081/frankenstein-the-1818-text-by-mary-shelley-introduction-by-charlotte-gordon-editorial-apparatus-by-charles-e-robinson/",
  },
  {
    name: "Things Fall Apart",
    authors: "Chinua Achebe",
    finishDate: "Jul 2022",
    link: "https://www.penguinrandomhouse.ca/books/565351/things-fall-apart-by-chinua-achebe/9780385667838",
  },
  {
    name: "The Secret Agent",
    authors: "Joseph Conrad",
    finishDate: "Jun 2022",
    link: "https://en.wikipedia.org/wiki/The_Secret_Agent",
  },
  {
    name: "The Lean Startup",
    authors: "Eric Ries",
    finishDate: "Apr 2022",
    link: "https://theleanstartup.com/book",
  },
  {
    name: "A Fine Balance",
    authors: "Rohinton Mistry",
    finishDate: "Jan 2022",
    link: "https://www.penguinrandomhouse.ca/books/115368/a-fine-balance-by-rohinton-mistry/9780771060540",
  },
];
