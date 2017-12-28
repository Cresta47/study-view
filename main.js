Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',

	data() {
		return {
			tasks: [
				{task: 'Go to Store', complete:true},
				{task: 'Go to email', complete:false},
				{task: 'Go to farm', complete:true},
				{task: 'Go to work', complete:true}
			]
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});


new Vue({
	el: '#root'
});