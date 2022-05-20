import { IPerson } from './interface';
// importação de interface para tipagem de nossos objetos
const PersonA: IPerson = {
name: 'John',
age: 22,
occupation: 'Developer',
gender: 'Male'
}
// Objeto persona A
const PersonB: IPerson = {
name: 'Kath',
age: 25,
occupation: 'Product Manager',
gender: 'Female'
}
// Objeto persona B
const AllPersons: IPerson[] = [PersonA, PersonB]
// array compondo 2 objetos e interface compondo array
export default AllPersons
// exportando array por padrão em nosso arquivo