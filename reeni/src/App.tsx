import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages";
import { ErrorBoundary } from "react-error-boundary";

// Scroll behavior (optional to lazy if critical)
import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import GlobaleffectProvider from "./components/common/GlobaleffectProvider";
import { ModalUIProvider } from "./context/ModalUIContext";
import { SiteDataProvider } from "./context/SiteDataContext";

const AdminPage = lazy(() => import("./pages/admin"));
const ServicesPage = lazy(() => import("./pages/services"));
const ResumePage = lazy(() => import("./pages/resume"));
const PortfolioPage = lazy(() => import("./pages/portfolio"));
const BlogPage = lazy(() => import("./pages/blog"));
const ContactPage = lazy(() => import("./pages/contact"));
const FaqPage = lazy(() => import("./pages/faq"));

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        // autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h2>Something went wrong.</h2>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button
              className="btn btn-primary mt-3"
              onClick={resetErrorBoundary}
            >
              Try again
            </button>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white"
              style={{ zIndex: 1050 }}
            >
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <SiteDataProvider>
            <ModalUIProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/admin" element={<AdminPage />} />
              </Routes>
            </ModalUIProvider>
          </SiteDataProvider>
        </Suspense>

        <ScrollTopBehaviour />
        <GlobaleffectProvider />
      </ErrorBoundary>
    </>
  );
}

export default App;
