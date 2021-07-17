import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-string-interpolation",
	templateUrl: "./string-interpolation.component.html",
	styleUrls: ["./string-interpolation.component.scss"],
})
export class StringInterpolationComponent implements OnInit {
	firstname = "Luciano";

	person = {
		firstname: "Ricardo",
		lastname: "Costa",
		age: 29,
	};
	constructor() {}

	ngOnInit(): void {}
}
