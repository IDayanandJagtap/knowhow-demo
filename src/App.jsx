import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <section className="w-full  md:px-20 md:py-6 lg:px-28 xl:px-36 2xl:px-72">
                <Carousel />
            </section>
            <About />
            <Courses />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
