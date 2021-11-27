const contect = {
    data() {
        return {
            input: '',
            studentName: '',
            marks: '',

            listAry: []
        }
    },
    methods: {
        update() {
            if (this.studentName === "" || this.marks === "") {
                alert(' Please vild the empty space')
                return;
            }
            this.listAry.push({
                id: this.listAry.length + 1,
                studentName: this.studentName,
                marks: this.marks,
                grade: 'a'
            })
            this.studentName = '';
            this.marks = "";

        },
        search() {
            this.listAry = this.listAry.filter(name => name.studentName.match(this.input));
        }
    }
}
const app = Vue.createApp(contect);
app.mount('#app')