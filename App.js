import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" > { /* <img src={logo} className="App-logo" alt="logo" /> */ } <
        p >

        <
        label >
        ID:
        <
        input type = "text"
        id = "id" / >
        <
        /label> <
        /p> <
        label >
        Nama Lengkap:
        <
        input type = "text"
        name = "name" / >
        <
        /label> <
        p >
        <
        label >
        Alamat:
        <
        input type = "text"
        alamat = "alamat" / >
        <
        /label> <
        /p>

        <
        p >

        <
        select >
        <
        option value = "provinsi.js" > < /option>

        <
        /select> <
        /p> <
        button >
        <
        a href = "create data (POST) https://reqaid.com/api/FakePosts" > Create < /a> <
        a href = "delete data by id (DELETE) https://reqaid.com/api/FakePosts/{id}" > Hapus < /a> <
        a href = "update data by id (PATCH) https://reqaid.com/api/FakePosts/{id}" > update < /a> <
        a href = "get list data (GET) https://reqaid.com/api/FakePosts" > Get < /a> <
        a href = "detail data by id (GET) https://reqaid.com/api/FakePosts/{id}" > Detail < /a> <
        /button>



        {
            /* <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a> */
        } <
        /header> <
        /div>
    );
}

export default App;