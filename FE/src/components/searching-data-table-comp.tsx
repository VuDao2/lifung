import { useState } from 'react';
import Contact from '../data/contact';
import { Container, Form, InputGroup, Table, Button } from 'react-bootstrap';

interface CompInfo {
    contacts: Contact[];
    openModal: any;
}

function SearchingDataTableComp(props: CompInfo) {
    const [search, setSearch] = useState('');

    return (
        <Container>
            <h1 className='text-center mt-4'>Contact Keeper</h1>
            <Form>
                <InputGroup className='my-3'>

                    {/* onChange for search */}
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search contacts'
                    />
                </InputGroup>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contacts
                        .filter((contact) => {
                            return search.toLowerCase() === ''
                                ? contact
                                : contact.FirstName.toLowerCase().includes(search);
                        })
                        .map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.FirstName}</td>
                                <td>{contact.LastName}</td>
                                <td>{contact.Email}</td>
                                <td>{contact.Phone}</td>
                                <Button
                                    variant="primary"
                                    data-item={contact}
                                    onClick={() => props.openModal(contact)}>Details</Button>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>

    )
}
export default SearchingDataTableComp;