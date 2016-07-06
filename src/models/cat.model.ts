export class Cat {
    public description: string;
    private adjectives: string[] = [
        ' lovely',
        ' cute',
        ' reasonable',
        ' remarkable',
        ' muscular',
        ' quick-witted',
        ' soft'];

    private loveHate: string[] = [
        ' loves',
        ' hates'];

    private activities: string[] = [
        ' long walks on the beach',
        ' ice-cream',
        ' low fat milk',
        ' horse riding',
        ' surfing with friends',
        ' looking at the stars on the top of a meowtain',
        ' netflix and chill',
        ' cooking dinner and baking cupcakes for loads of cats']
    constructor(
        public name: string,
        public src: string,
        public score: number,
        public index: number
    ) {
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1)
        this.description = this.generateDesc();
    }

    public increaseScore() {
        this.score += 1;
    }

    public generateDesc(): string {
        let cAdjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
        let cLoveHate = this.loveHate[Math.floor(Math.random() * this.loveHate.length)];
        let cActivities = this.activities[Math.floor(Math.random() * this.activities.length)];
        return this.name + ' is' + cAdjective + ' and' + cLoveHate + cActivities;
    }
}