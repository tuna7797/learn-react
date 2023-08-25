import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return <div className="Layout">
    <Header />
    <main>
      <Container headline="CTA" colorClassName="bg-rose-500" />
      <Container headline="AD" colorClassName="bg-sky-500" />
      <Container headline="IMPORTANT" colorClassName="bg-purple-500" />
    </main>
    <Footer />
  </div>;
}

function Container({ headline, colorClassName, children }) {
  return (
    <section className={`h-screen ${colorClassName} p-5`}>
      <h2 className="text-black">{headline}</h2>
      {children}
    </section>
  )
}

export default Layout;