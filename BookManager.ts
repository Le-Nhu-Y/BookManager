import {Book} from "./book"
export class BookManager {
    book: Book[] = [];

    constructor(){

    }
    add(book: Book): void{
        this.book.push(book);
    }
    getList(): Book[]{
        return this.book;
    }
    delete(ID:string): void{
        let indexBookDelete = this.findBook(ID);
        if(indexBookDelete!= -1){
            this.book.splice(indexBookDelete, 1);
        }else{
            throw new Error("delete error");
        }
    }
    update(ID:string,name:string){
        let indexBookUpdate = this.findBook(ID);
        if(indexBookUpdate != -1){
            this.book[indexBookUpdate].setName(name);
        }else{
            throw new Error("update error");
        }
    }
    findBook(ID:string){
        let i=-1;
        this.book.forEach((book,index) =>{
            if(book.ID === ID){
                i = index;
            }
        })
        return i;
    }

}
