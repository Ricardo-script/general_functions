 useEffect(() => {
        const preventPullToRefresh = (e: TouchEvent) => {
            e.preventDefault();
        };

        document.body.addEventListener("touchmove", preventPullToRefresh, {
            passive: false,
        });

        return () => {
            document.body.removeEventListener(
                "touchmove",
                preventPullToRefresh
            );
        };
    }, []);

