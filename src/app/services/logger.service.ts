import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // This makes the service available application-wide
})
export class LoggerService {

    log(message: string): void {
        console.log(`LoggerService: ${message}`);
    }


}