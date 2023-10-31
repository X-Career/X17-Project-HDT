import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

const ShowFooterContext = createContext();
export const useShowFooter = () => useContext(ShowFooterContext);

export const ShowFooterProvider = ({ children }) => {
  const router = useRouter();
  const [showFooter, setShowFooter] = useState(true);
  useEffect(() => {
    const isCreateAlbumPage = router.pathname === "/create-album";
    setShowFooter(!isCreateAlbumPage);
  }, [router.pathname, setShowFooter]);
  return (
    <ShowFooterContext.Provider value={{ showFooter, setShowFooter }}>
      {children}
    </ShowFooterContext.Provider>
  );
};
