import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  private lukeSykWalkker: any;
  private biggerLadyLukeSkyWalker: any;

  constructor(private http: HttpClient) {
    // Get Luke Skywalker from star wars api and turn him into a taller, heavier woman with different color hair
    this.http.get('https://swapi.co/api/people/1/')
      .subscribe((response) => {

        this.lukeSykWalkker = response;

        // Do data mapping
        this.lukeSykWalkker.gender = 'female';
        this.lukeSykWalkker.hair_color = 'brunette';
        this.lukeSykWalkker.height = (parseInt(this.lukeSykWalkker.height, 10) + 50).toString();
        this.lukeSykWalkker.mass = (parseInt(this.lukeSykWalkker.mass, 10) + 20).toString();

        this.biggerLadyLukeSkyWalker = this.lukeSykWalkker;

        // DEBUGGING
        console.log(`Luke Skywalker${JSON.stringify(this.getLukeSkyWalker().gender, null, 2)}`);
        console.log(`Lady Skywalker${JSON.stringify(this.getBiggerLadyLukeSkywalker().gender, null, 2)}`);

      });
  }

  /**
   * Return unmodified Luke Skywalker
   * @returns {any}
   */
  public getLukeSkyWalker() {
    return this.lukeSykWalkker;
    // For some reason this is returning lady luke Skwyalker!?!
    //  It should return normal Luke Skywalker

// WHYYY DOESN't THIS WORK
  }

  /**
   * Return Bigger Lady Luke Skywalker
   * @returns {any}
   */
  public getBiggerLadyLukeSkywalker() {
    return this.biggerLadyLukeSkyWalker;
  }
}
