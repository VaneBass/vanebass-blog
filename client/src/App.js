import TopBar from "./components/TopBar";
import Home from "./pages/home";
import Single from "./pages/single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDarkMode } from "./styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "./data/data";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // 博客列表
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [perPageNumber, setPerPageNumber] = useState(6);
  // 当前分类
  const [currentCat, setCurrentCat] = useState("");
  // 分类列表
  const [categories, setCategories] = useState([]);
  // 搜索
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const smallScreen = window.innerWidth <= 480 ? true : false;

  // 防抖函数
  function useDebounce(fn, delay) {
    const { current } = useRef({ fn, timer: null });
    useEffect(
      function () {
        current.fn = fn;
      },
      [current, fn]
    );

    return useCallback(
      (...args) => {
        if (current.timer) {
          clearTimeout(current.timer);
        }
        current.timer = setTimeout(() => {
          current.fn.call(this, ...args);
        }, delay);
      },
      [current, delay]
    );
  }

  // 请求搜索结果
  async function fetchSearchRes() {
    if (searchWord) {
      try {
        const res = await axios.get(`${baseUrl}/posts/search`, {
          params: {
            searchWord,
          },
        });
        setSearchResult(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // 使用防抖函数
  let getSearchRes = useDebounce(fetchSearchRes, 500);

  useEffect(() => {
    console.log(window.innerWidth);
    const fetchPosts = async () => {
      const res = await axios.get(`${baseUrl}/posts`, {
        params: {
          category: currentCat,
          currentPage,
          perPageNumber,
        },
      });
      setPosts(res.data.posts);
      setTotalPage(res.data.totalPage);
    };

    const fetchCategories = async () => {
      const res = await axios.get(`${baseUrl}/category`);
      setCategories(res.data);
    };

    fetchPosts();
    fetchCategories();

    if (searchWord) {
      getSearchRes();
    }

    smallScreen ? setPerPageNumber(4) : setPerPageNumber(6);
  }, [
    currentPage,
    perPageNumber,
    currentCat,
    searchWord,
    getSearchRes,
    smallScreen,
  ]);

  const requestPostsByPage = (page) => {
    if (page === "...") {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <TopBar
          theme={theme}
          toggleTheme={toggleTheme}
          setSearchWord={setSearchWord}
          searchResult={searchResult}
        />
        <Routes>
          <Route
            eaxct
            path="/"
            element={
              <Home
                theme={theme}
                posts={posts}
                categories={categories}
                totalPage={totalPage}
                currentPage={currentPage}
                requestPostsByPage={requestPostsByPage}
                currentCat={currentCat}
                setCurrentCat={setCurrentCat}
              />
            }
          />
          <Route path="/posts/:postId" element={<Single theme={theme} />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
