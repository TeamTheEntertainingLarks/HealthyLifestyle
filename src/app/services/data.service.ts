import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { reject } from 'q';

import { RecipeInterface } from '../interfaces/recipe';
import { Workout } from '../interfaces/workout-routine';

const DATA = {
  recipes: [
    {
      id: 0,
      title: 'Tomato-Cheddar Cornbread',
      category: 'bread',
      author: 'Alice Ford',
      image: '/assets/images/cornbread.jpg',
      createdOn: Date.now() + 1,
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere.',
      ingradients: [
        '2 tablespoons unsalted butter, plus more for pan',
        '1 1/2 cups cornmeal',
        '1/2 cup whole-wheat four',
        '1 teaspoon baking powder',
        '1/2 teaspoon baking soda',
        '1 1/2 teaspoons salt',
        '1/2 teaspoon black pepper',
        '1/4 teaspoon cayenne (optional)',
        '2 large eggs, at room temperature',
        '1 1/4 cups buttermilk, at room temperature',
        '1/2 teaspoon honey	3/4 cup shredded sharp Cheddar cheese, plus 2 Tbsp. (optional)',
        '2 medium tomatoes, halved and sliced 1/4 inch thick'
      ],
      steps: {
        step1: 'Preheat oven to 375ºF. Butter an 11-by-7-inch glass baking dish.',
        // tslint:disable-next-line:max-line-length
        step2: `Whisk cornmeal, flour, baking powder, baking soda, 1¼ teaspoons salt, ¼ teaspoon pepper, and cayenne, if desired, in a large bowl. In a separate bowl, whisk eggs, buttermilk, and honey until combined. Pour buttermilk mixture into cornmeal mixture and stir until nearly combined. Fold in ¾ cup cheese. Spread batter in baking dish.`,
        step3: `Melt 2 tablespoons butter in a large skillet over medium heat. Add tomato slices, sprinkle with remaining ¼ teaspoon each salt and pepper, and cook, undisturbed, until tomatoes begin to soften, 1 to 2 minutes. Carefully turn tomatoes with tongs and cook 1 minute more. Transfer to baking dish, arranging on top of batter. Pour any juices from skillet over tomatoes. Sprinkle with 2 tablespoons cheese, if desired. Bake until cornbread is golden and a toothpick inserted in center comes out clean, about 30 minutes. Let cool in baking dish on a wire rack for at least 10 minutes before serving.`
      },
      comments: []
    },
    {
      id: 1,
      title: 'Peach-Raspberry Smoothie Bowl',
      category: 'drinks',
      author: 'Alice Ford',
      image: '/assets/images/smoothie.jpg',
      createdOn: Date.now() + 2,
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere.',
      ingradients: [
        '1 cup frozen raspberries (about 4 oz.)',
        '1/2 cup frozen peach slices (about 2 1/2 oz.)',
        '1/2 cup plain whole-milk yogurt',
        '1/2 medium zucchini (about 4 oz.), chopped',
        '1 tablespoon ground flaxseed',
        '1 tablespoon raw honey',
        '1 teaspoon vanilla extract',
        'Pinch of salt',
        'Desired toppings'
      ],
      steps: {
        // tslint:disable-next-line:max-line-length
        step1: `Place raspberries, peach slices, yogurt, zucchini, flaxseed, honey, vanilla, and salt in a blender; process until smooth, 20 to 30 seconds, stopping to stir and scrape down sides as needed. (If mixture is too thick, add up to 4 tablespoons water and process again.) Divide between 2 bowls and sprinkle with toppings. Serve immediately.`
      },
      comments: []
    },
    {
      id: 2,
      title: 'Chipotle-Corn Salsa',
      category: 'other',
      author: 'Jane Adams',
      image: '/assets/images/salsa.jpg',
      createdOn: Date.now() + 3,
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere.',
      ingradients: [
        '1 tablespoon avocado oil',
        '1 1/2 cups fresh corn kernels (from 1 large ear)',
        'Salt and pepper',
        '1/2 cup finely diced red onion (from about ½ small onion)',
        '1 medium poblano chile, minced (about 1/2 cup)',
        '2 small tomatoes, chopped (about 1 cup)',
        '2 canned chipotles in adobo, seeded and minced',
        '3 tablespoons fresh lime juice',
        '1/3 cup chopped fresh cilantro'
      ],
      steps: {
        // tslint:disable-next-line:max-line-length
        step1: `Warm oil in a medium skillet over medium-high heat. Add corn, sprinkle with salt, and cook, stirring occasionally, until tender and beginning to turn golden, about 3 minutes. Add onion and poblano and cook, stirring, until corn starts to brown and onion and poblano soften, 2 to 3 minutes. Transfer to a medium bowl. (Alternatively, grill corn before removing kernels from ear. Slice onion and grill before dicing. Grill poblano, turning, until charred; remove skin and dice.)`,
        step2: `When corn mixture has cooled, fold in tomatoes, chipotles, lime juice, and cilantro. Season with salt and pepper. Serve or cover and refrigerate for up to 1 day to allow flavors to develop.`
      },
      comments: []
    },
    {
      id: 3,
      title: 'Broccoli Steaks With Parmesan Bread Crumbs',
      category: 'vegetables',
      author: 'Jane Adam',
      image: ' ../../assets/images/broccoli.jpg',
      createdOn: Date.now() + 4,
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere.',
      ingradients: [
        '2 ounces French bread, torn',
        '1 12-oz. head fresh broccoli',
        '1/4 cup unsalted butter',
        '2 tablespoons Worcestershire sauce',
        '2 tablespoons grapeseed oil',
        '1 tablespoon chopped fresh thyme',
        '1/4 cup grated Parmesan cheese',
        '1/2 teaspoon black pepper'
      ],
      steps: {
        // tslint:disable-next-line:max-line-length
        step1: `Preheat oven to 400°F. Pulse bread in a food processor until coarse crumbs form, 6 to 8 times.C ut broccoli lengthwise into 4 wedges, making sure florets stay attached to the stem. Warm 2 tablespoons of the butter in a small skillet over very low heat until melted, 1 to 2 minutes. Remove from heat; transfer to a small bowl, add Worcestershire sauce, and stir to combine. Brush broccoli evenly with Worcestershire mixture.`,
        // tslint:disable-next-line:max-line-length
        step2: `Heat oil in a large cast-iron skillet over medium-high heat. Place broccoli quarters in skillet, cut side down. Cook, brushing occasionally with Worcestershire mixture, until caramelized, 4 to 5 minutes per side. Transfer skillet to oven; roast until broccoli is tender, 8 to 10 minutes.`,
        step3: `Melt remaining 2 tablespoons butter in same small skillet over medium heat. Add bread crumbs and thyme. Cook, stirring often, until bread crumbs are toasted, 4 to 5 minutes. Remove from heat. Stir in cheese and pepper. Place 1 broccoli wedge on each of 4 plates; top evenly with bread crumb mixture.`
      },
      comments: []
    }
  ],
  activities: [
    {
      id: 0,
      title: 'Are you ready for a summer hiking?',
      author: 'Alice Ford',
      createdOn: Date.now() + 1,
      image: '/assets/images/hiking.jpg',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere.',
      // tslint:disable-next-line:max-line-length
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere.`,
      comments: []
    },
    {
      id: 1,
      title: 'Ways to Ace Your Trail Run',
      author: 'Jane Adam',
      createdOn: Date.now() + 3,
      image: '../../assets/images/run.jpg',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere.',
      // tslint:disable-next-line:max-line-length
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsum aspernatur sed deserunt veniam possimus modi accusantium quos consectetur ab beatae, soluta facilis ipsam eius fugit corrupti voluptatum quidem facere.`,
      comments: []
    }
  ]
};

@Injectable()
export class DataService {
  private data: any;

  constructor() {
    this.data = DATA;
  }

  getRecipesAll(): Promise<Array<RecipeInterface>> {
    return new Promise((resolve, reject) => {
      resolve(this.data.recipes);
    });
  }

  getRecipeById(id): Promise<RecipeInterface> {
    let recipe;
    this.data.recipes.map((c) => {
      if (c.id === Number(id)) {
        recipe = c;
      }
    });

    return new Promise((resolve, reject) => {
      resolve(recipe);
    });
  }

  getActivitiesAll(): Promise<Array<Workout>> {
    return new Promise((resolve, reject) => {
      resolve(this.data.activities);
    });
  }

  getActivityById(id): Promise<Workout> {
    let activity;
    this.data.activities.map((o) => {
      if (o.id === Number(id)) {
        activity = o;
      }
    });

    return new Promise((resolve, reject) => {
      resolve(activity);
    });
  }
}
