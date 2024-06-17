import About from "./components/About";
import Carousel from "./components/Carousel";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <section className="w-full md:px-20 md:py-6 lg:px-28 xl:px-36 2xl:px-72">
                <Carousel />
            </section>
            <About />
        </>
    );
}

export default App;
