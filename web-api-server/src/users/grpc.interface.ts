import { Observable } from 'rxjs';

export interface IGrpcService {
  createUser(user: INewUser): Observable<any>;
  findOne(id: UserById): ICreatedUser;
}

interface UserById {
  id: number
}

interface ICreatedUser {
  id: number
  name: string
  email: string
}

interface INewUser {
  name: string
  email: string
}