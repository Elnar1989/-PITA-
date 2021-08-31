import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "../components/Others/Modal/Modal";

const EditContext = createContext();

function EditContextProvider({ children }) {
  const [edit, setEdit] = useState(true);
  const [post, setPost] = useState({});
  const [tag, editTag] = useState("");
  const [widget, setWidget] = useState("");
  const [on, setOn] = useState({});
  const [importants, setImportans] = useState([]);
  const [toggleHeader, setToggleHeader] = useState(false)


  const curUserPosts = useSelector((state) => state.curUserPosts);


  const room = useSelector((state) => state.room);

  useEffect(() => {
    axios
      .get("http://localhost:3001/tools")
      .then((res) => setImportans(res.data));
  }, []);

  const deleteImportant = (id) => {
    setImportans((prev) => prev.filter((el) => el === id));
  };

  const importantHeandler = (id) => {
    setImportans((prev) => [...prev, id]);
  };

  const toggleHeaderOnHeandler = () => {
    setToggleHeader(true);
  };
  const toggleHeaderOutHeandler = () => {
    setToggleHeader(true);
    localStorage.clear();
  };
  const toggleHeaderOffHeandler = () => {
    setToggleHeader(false);
  };

  const [model, setModel] = useState("");

  function handlerView(ids) {
    const currPost = room.find((el) => el.id === ids);
    console.log(currPost);
    const name = currPost.name;
    const body = currPost.body;
    const id = currPost.id;
    setModel(
      <Modal
        key={id}
        name={name}
        body={body}
        showHeart={false}
        setModel={setModel}
        id={id}
        show={true}
      />
    );
  }
  function handlerView2(idPost) {
    const currPost = curUserPosts.find(el => el.id === idPost)
    console.log(currPost);
    const name = currPost.name
    const body = currPost.body
    const id = currPost.id
    setModel(<Modal key={id} name={name} body={body} showHeart={false} setModel={setModel} id={id} show={true} />)

  }

  return (
    <EditContext.Provider
      value={{
        setPost,
        setEdit,
        edit,
        post,
        tag,
        editTag,
        widget,
        setWidget,
        on,
        setOn,
        importants,
        importantHeandler,
        deleteImportant,
        toggleHeader,
        toggleHeaderOnHeandler,
        toggleHeaderOffHeandler,
        model,
        handlerView,
        handlerView2,
        toggleHeaderOutHeandler
      }}
    >
      {children}
    </EditContext.Provider>
  );
}

export default EditContextProvider;

const useEditContext = () => useContext(EditContext);
export { useEditContext };
