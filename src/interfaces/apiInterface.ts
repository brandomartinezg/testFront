export interface Fruits {
    genus:      string;
    name:       string;
    id:         number;
    family:     string;
    order:      string;
    nutritions: Nutritions;
}

export interface Nutritions {
    carbohydrates: number;
    protein:       number;
    fat:           number;
    calories:      number;
    sugar:         number;
}
