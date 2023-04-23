// const arr  = require("./BooksAdded")
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../css/BookList.css'

export default function(){
    let [showAddNew, setAddNew] = useState(false);
    let [newTitle, setTitle] = useState("");
    let [newAuthor, setAuthor] = useState("");
    let [newPublisher, setPublisher] = useState("");
    let [newDate, setDate] = useState("");
    let [newDescription, setDescription] = useState("");
    let [newISBN, setISBN] = useState("");
    let navigate = useNavigate();
    let [newBook, setNewBook] = useState({});
    let [showArr,setShowArr] = useState([false])
    let [updateArr,setUpdateArr] = useState([false])
    function Logout(){
        navigate("/");
    }
    function AddNewButton(){
        setAddNew(!showAddNew)
    }
    function AddNewBookFormButton(e){
        e.preventDefault();
        newBook.title = newTitle;
        newBook.isbn = newISBN;
        newBook.author = newAuthor;
        newBook.description = newDescription;
        newBook.date = newDate;
        newBook.publisher = newPublisher;
        // newBook.show = 'false';
        setShowArr([
            ...showArr,
            false
        ])
        setUpdateArr([
            ...updateArr,
            false
        ])
        // setArr([...arr,
        //     newBook
        // ])
        setAddNew(!showAddNew);
        console.log(arr);
    }
    function ShowDetails(){
        alert('hi');
        // i.show = true;
    }


    let [arr,setArr] = useState([
        {
            title:"abc",
            isbn:"0000",
            author:"aaa",
            description:'much wow',
            date: "2023-01-01",
            publisher:"penguin",
            show: false
        }
    ])
    console.log(arr)
    useEffect(()=>{
        setArr([...arr,
            newBook
        ])
    },[])

    return (<>
        <div id='main'>
            <h1>Books List</h1>
            <button onClick={Logout}>Logout</button>
            <button onClick={AddNewButton}>+ Add New Button</button>
            <div id='book-list'>
                {arr.map((i,idx)=>{
                    return <div>
                        <button id='book' onClick={()=>{
                            setShowArr([
                                ...showArr.slice(0,idx),
                                !showArr[idx],
                                ...showArr.slice(idx+1,showArr.length)
                            ])
                            }}>
                            <h3>{i.title}</h3>
                            <h3>{i.isbn}</h3>
                            <h3>{i.author}</h3>
                            <h3>{i.description}</h3>
                            <h3>{i.publisher}</h3>
                            {/* <h3>{arr.indexOf(i)}</h3> */}
                        </button>
                        {showArr[idx] &&
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Book Title</td>
                                            <td>{i.title}</td>
                                        </tr>
                                        <tr>
                                            <td>ISBN</td>
                                            <td>{i.isbn}</td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td>{i.author}</td>
                                        </tr>
                                        <tr>
                                            <td>Publisher</td>
                                            <td>{i.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td>Published Date</td>
                                            <td>{i.date}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>{i.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button onClick={()=>{
                                    setArr([
                                        ...arr.slice(0,idx),
                                        ...arr.slice(idx+1,arr.length)

                                    ])
                                    setShowArr([
                                        ...showArr.slice(0,idx),
                                        ...showArr.slice(idx+1,showArr.length)
                                    ])
                                }}>Delete Book</button>
                                <button onClick={()=>{
                                    // alert("requires copycat form and arr")
                                    setUpdateArr([
                                        ...updateArr.slice(0,idx),
                                        !updateArr[idx],
                                        ...updateArr.slice(idx+1,updateArr.length)
                                    ])
                                }}>Edit Book</button>
                        </div>
                        }
                        {updateArr[idx] && <div>
                            <h3>Update Book</h3>
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                setArr([
                                    ...arr.slice(0,idx),
                                    {
                                        title : newTitle,
                                        isbn : newISBN,
                                        author:newAuthor,
                                        description : newDescription,
                                        date : newDate,
                                        publisher: newPublisher
                                    },
                                    ...arr.slice(idx+1,arr.length)
                                ])
                                setUpdateArr([
                                    ...updateArr.slice(0,idx),
                                    !updateArr[idx],
                                    ...updateArr.slice(idx+1,updateArr.length)
                                ])

                                
                            }}>
                                <input type='text' onChange={(e)=> setTitle(e.target.value)} placeholder={i.title} required/>
                                <input type='text'  onChange={(e)=> setISBN(e.target.value)} placeholder={i.isbn} required/>
                                <input type='text'  onChange={(e)=> setAuthor(e.target.value)} placeholder={i.author}required/>
                                <input type='text'  onChange={(e)=> setDescription(e.target.value)} placeholder={i.description} required/>
                                <input type='date'  onChange={(e)=> setDate(e.target.value)} placeholder={i.date} required/>
                                <input type='text'  onChange={(e)=> setPublisher(e.target.value)} placeholder={i.publisher} required/>
                                
                                <button>Update</button>
                            </form>
                        </div>}
                    </div>
                })}
            </div>
        </div>
        {showAddNew && 
            <div>
                <button onClick={AddNewButton}>Show Book List</button>
                <h1>Add Book</h1>
                <h3>Create new Book</h3>
                <form onSubmit={AddNewBookFormButton}>
                    <input type='text' placeholder="Book Title" onChange={(e)=> setTitle(e.target.value)} required/>
                    <input type='text' placeholder="ISBN" onChange={(e)=> setISBN(e.target.value)} required/>
                    <input type='text' placeholder="Author" onChange={(e)=> setAuthor(e.target.value)} required/>
                    <input type='text' placeholder="Description" onChange={(e)=> setDescription(e.target.value)} required/>
                    <input type='date' placeholder="Publish Date" onChange={(e)=> setDate(e.target.value)} required/>
                    <input type='text' placeholder="Publisher" onChange={(e)=> setPublisher(e.target.value)} required/>

                    <button>Submit</button>
                </form>
            </div>
        }
    </>)
}