// import { render, screen } from "@testing-library/react";
// import loginEvent from "@testing-library/login-event";

// import Login from "./Login";
// import { server } from '../../mocks/server.js'


// // mock server: 
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// // mock  callback functions:
// const setLoggedIn = jest.fn()



// describe('Login', () => {
//     test('renders the form', () => {
//         render(<Login setLoggedIn={setLoggedIn} />)
//         // elements are present using the lable
//         const inputUserName = screen.getByLabelText(/username/i)
//         expect(inputUserName).toBeInTheDocument()
//         const inputPassword = screen.getByLabelText(/password/i)
//         expect(inputPassword).toBeInTheDocument()
//         const button = screen.getByRole('button')
//         expect(button).toBeInTheDocument()
//     })
//     test('displays text for ok login', async () => {
//         render(<Login setLoggedIn={setLoggedIn} />)
//         // fill out form: 
//         await userEvent.type(screen.getByLabelText(/username/i), 'Tester')
//         await userEvent.type(screen.getByLabelText(/password/i), 'ABC123abc!')
//         await userEvent.click(screen.getByRole('button'))
//         // check if we see the text

//         expect(await screen.findByText('You are logged in!')).toBeInTheDocument()
//     })
// })