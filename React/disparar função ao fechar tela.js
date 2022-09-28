 useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleUnload = (e) => {
    const message = "o/";
    (e || window.event).returnValue = message; //Gecko + IE
    return message;
  };