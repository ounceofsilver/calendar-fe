

// settings
var calendarsSelect = $("h3#calendars-select");
var accountSelect = $("#settings-nav h3#account-select");
var plansSelect = $("#settings-nav h3#plans-select");

calendarsSelect.on("click", () => {openPane("calendars");});
accountSelect.on("click", () => {openPane("account");});
plansSelect.on("click", () => {openPane("plans");});

function resetPanes() {
	$("#calendars-select").removeClass("active-link");
	$("#account-select").removeClass("active-link");
	$("#plans-select").removeClass("active-link");

	$("#calendars").addClass("hidden");
	$("#account").addClass("hidden");
	$("#plans").addClass("hidden");
}
function openPane(pane) {
	resetPanes();
	$("#" + pane + "-select").addClass("active-link");
	$("#" + pane).removeClass("hidden");
}