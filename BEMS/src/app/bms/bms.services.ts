import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class BMSService {
    constructor(private http: Http) {}

    extractData(res: Response) {
        return res.json();
    }

    getData() {
        return this.http.get('../assets/data/table.json').map(this.extractData);
    }

    // public fetchUsers() {
    //     return this.http.get("../assets/data/table.json").map((res: Response) => res.json())
    // }

    // createProject(attrs): Observable<Project> {
    //     return this.http.post('/api/projects', attrs).map(this.extractData);
    // }

    // getConversation(id: string) : Observable<Conversation> {
    //     return this.http.get('/api/conversations/' + id).map(this.extractData);
    // }

    // createConversation(id: string, name: string) : Observable<Conversation> {
    //     return this.http.post(`/api/projects/${id}/conversations`, { name }).map(this.extractData);
    // }

    // createMessage(conv_id: string, message: string) {
    //     return this.http.post('/api/conversations/' + conv_id + '/messages', message).map(this.extractData);
    // }
}