import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

const SiteContext = createContext();

export default function SiteProvider({ children }) {
  // router
  const router = useRouter();
  const { slug } = router.query;

  // pageState
  const [pageState, setPageState] = useState({});
  const [pageZIndex, setPageZIndex] = useState({});
  const [pageTitle, setPageTitle] = useState("Marco Vincit");

  useEffect(() => {
    setPageTitle(
      `Marco Vincit${
        slug ? " | " + slug.charAt(0).toUpperCase() + slug.slice(1) : ""
      }`
    );
  }, []);

  //   useEffect(() => {
  //     if (slug) {
  //       setPageState({ ...pageState, [slug]: { state: true } });
  //     } else {
  //       setPageState({});
  //     }
  //   }, [slug]);

  return (
    <SiteContext.Provider
      value={{
        pageState,
        setPageState,
        pageZIndex,
        setPageZIndex,
        pageTitle,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used within a SiteProvider");
  const { pageState, setPageState, pageZIndex, setPageZIndex, pageTitle } =
    context;
  return {
    pageState,
    setPageState,
    pageZIndex,
    setPageZIndex,
    pageTitle,
  };
}
