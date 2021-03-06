import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook.js';
import BookList from '../components/BookList';
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = ()=>{
	const[books, setBooks] = useLocalStorage('books', []);
	return(
		<BrowserRouter>
			<div>
				<Header />
				<div className= "main-content">
				<Switch>
					<Route component = {BookList} path= "/" exact = {true} />
					// <Route component = {AddBook} path= "/add" />
					<Route render = {(props)=>(
						<AddBook {...props} books = {books} setBooks={setBooks} />
					)}
					path = "/add" />
				</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default AppRouter;