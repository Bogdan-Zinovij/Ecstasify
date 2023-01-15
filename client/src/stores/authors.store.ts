import { sortByCreatedDate } from '@/helpers';
import { Author } from '@/models/author';
import { RootService } from '@/services';
import { makeAutoObservable, runInAction } from 'mobx';
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

    makeAutoObservable(this, {}, { autoBind: true });
  }

  async getAllAuthors() {
    runInAction(() => {
      this.getAllAuthorsLoading = true;
    });

    const { getAllAuthors } = this.rootService.authorsService;
    const data = await getAllAuthors();

    if (data) {
      runInAction(() => {
        this.authors = sortByCreatedDate(data);
      });
    }

    runInAction(() => {
      this.getAllAuthorsLoading = false;
    });
  }

  async createAuthor(author: Author) {
    runInAction(() => {
      this.createAuthorLoading = true;
    });

    const { createAuthor } = this.rootService.authorsService;
    await createAuthor(author);
    this.getAllAuthors();

    runInAction(() => {
      this.createAuthorLoading = false;
    });
  }

  async deleteAuthor(author: Author) {
    const { deleteAuthor } = this.rootService.authorsService;
    const { id: authorId } = author;
    await deleteAuthor(authorId);
    this.getAllAuthors();
  }

  async updateAuthor(authorId: Author['id'], updatedAuthorData: Author) {
    runInAction(() => {
      this.createAuthorLoading = true;
    });

    const { updateAuthor } = this.rootService.authorsService;
    await updateAuthor(authorId, updatedAuthorData);
    this.getAllAuthors();

    runInAction(() => {
      this.createAuthorLoading = false;
    });
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
