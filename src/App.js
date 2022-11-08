import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './Component/AddService/AddService';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import MyReviews from './Component/MyReviews/MyReviews';
import Services from './Component/Services/Services';
import Signin from './Component/SignIn/Signin';
import Signup from './Component/SignUp/Signup';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/signin',
          element:<Signin></Signin>
        },
        {
          path:'/myreviews',
          element:<MyReviews></MyReviews>
        },
        {
          path:'/addservice',
          element:<AddService></AddService>
        }


      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
