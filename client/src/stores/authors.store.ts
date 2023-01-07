import { sortByCreatedDate } from '@/helpers';
import { Author } from '@/models/author';
import { RootService } from '@/services';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';

export class AuthorsStore {
  private rootStore?: RootStore;
  private rootService: RootService;

  // data
  authors: Author[] = [];
  currentAuthor: Author | null = null;

  // loading states
  createAuthorLoading = false;
  getAllAuthorsLoading = false;

  constructor(rootServise: RootService, rootStore?: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootServise;

    makeAutoObservable(this, undefined, { autoBind: true });
  }

  async getAllAuthors() {
    try {
      this.getAllAuthorsLoading = true;
      const { getAllAuthors } = this.rootService.authorsService;
      const { data } = await getAllAuthors();

      this.authors = sortByCreatedDate(data);
    } catch (err) {
      console.log(err);
    }

    this.getAllAuthorsLoading = false;
  }

  async createAuthor(author: Author) {
    try {
      this.createAuthorLoading = true;
      const { createAuthor } = this.rootService.authorsService;
      await createAuthor(author);
      this.getAllAuthors();
    } catch (err) {
      console.log(err);
    }

    this.createAuthorLoading = false;
  }

  async deleteAuthor(author: Author) {
    try {
      const { deleteAuthor } = this.rootService.authorsService;
      const { id: authorId } = author;
      await deleteAuthor(authorId);
      this.getAllAuthors();
    } catch (err) {
      console.log(err);
    }
  }

  async updateAuthor(authorId: Author['id'], updatedAuthorData: Author) {
    try {
      this.createAuthorLoading = true;
      const { updateAuthor } = this.rootService.authorsService;
      await updateAuthor(authorId, updatedAuthorData);
      this.getAllAuthors();
    } catch (err) {
      console.log(err);
    }

    this.createAuthorLoading = false;
  }

  resetAuthors() {
    this.authors = [];
  }

  resetCurrentAuthor() {
    this.currentAuthor = null;
  }

  setCurrentAuthor(author: Author) {
    this.currentAuthor = author;
  }
}
