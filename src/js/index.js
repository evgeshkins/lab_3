import $, { timers } from "jquery";
import * as bootstrap from 'bootstrap';
$(document).ready(function () {
    const fillModal = (modal, source) => {
        modal.find(".modal-title").html(source.find(".card-title").html())
        modal.find(".modal-body").html(source.find(".card-text").html())

    };
    $(document).on("click", ".card", function (e) {
        const modal = $(document).find("#modal")
        modal.attr("currentItem", $(this).attr("id").match(/\d/g).join(""))
        fillModal(modal, $(this));
    })
    $(document).on("click", ".button_fact", function (e) {
        var toast = new bootstrap.Toast($('.toast'));
        toast.show();
    })
    $(document).on("keydown", function (e) {
        const modal = $(document).find("#modal")
        const currentCardId = modal.attr("currentItem")
        console.log(currentCardId)
        if (event.key === "ArrowLeft") {
            
                if ($(`#object-${currentCardId - 1}`).length) {
                    fillModal(modal, $(`#object-${currentCardId - 1}`));
                    modal.attr("currentItem", currentCardId - 1);
                }
                else {
                    fillModal(modal, $(`#${$(".card").length}`));
                    modal.attr("currentItem", $(".card").length);
                }
            



        }
        if (event.key === "ArrowRight") {
            if ($(`#object-${Number(currentCardId) + 1}`).length) {
                fillModal(modal, $(`#object-${Number(currentCardId) + 1}`));
                modal.attr("currentItem", Number(currentCardId) + 1);
            }
            else {
                fillModal(modal, $(`#object-1`));
                modal.attr("currentItem", $(".card").length);
            }
        }
    })
    
});