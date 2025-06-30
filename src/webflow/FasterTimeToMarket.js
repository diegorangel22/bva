"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FasterTimeToMarket.module.css";

export function FasterTimeToMarket({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "bva_container")} tag="div">
      <_Builtin.FormWrapper>
        <_Builtin.FormForm
          name="wf-form-Test-Form"
          data-name="Test Form"
          method="get"
          id="wf-form-Test-Form"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "input-block-2")}
            tag="div"
          >
            <_Builtin.FormBlockLabel
              className={_utils.cx(_styles, "input-label")}
              htmlFor="new-new"
            >
              {"Weeks spent from web creation to publish before Webflow"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "input-2")}
              name="Weeks-spent-from-web-creation-to-publish-before-Webflow"
              maxLength={256}
              data-name="Weeks spent from web creation to publish before Webflow"
              placeholder="weeks"
              disabled={false}
              type="text"
              required={false}
              autoFocus={false}
              id="new-new"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "input-block-2")}
            tag="div"
          >
            <_Builtin.FormBlockLabel
              className={_utils.cx(_styles, "input-label")}
              htmlFor="major-edits"
            >
              {"Weeks spent on making Major edits before Webflow"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "input-2")}
              name="email"
              maxLength={256}
              data-name="Email"
              placeholder="Weeks"
              disabled={false}
              type="number"
              required={true}
              autoFocus={false}
              id="major-edits"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "input-block-2")}
            tag="div"
          >
            <_Builtin.FormBlockLabel
              className={_utils.cx(_styles, "input-label")}
              htmlFor="minor-edits"
            >
              {"Days spent on making minor edits before Webflow"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "input-2")}
              name="email-2"
              maxLength={256}
              data-name="Email 2"
              placeholder="Days"
              disabled={false}
              type="number"
              required={true}
              autoFocus={false}
              id="minor-edits"
            />
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "button")}
            button={true}
            id="calculate"
            block=""
            options={{
              href: "#",
            }}
          >
            {"Calculate"}
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "success-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "success_copy")}
              tag="div"
            >
              {"Faster time-to market:"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "numberval")}
              tag="div"
              id="number"
            >
              {"0"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "percentage")}
              tag="div"
            >
              {"%"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage
          className={_utils.cx(_styles, "form-success")}
        >
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "code-embed")}
        value="%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0A%20%20%20%20const%20form%20%3D%20document.querySelector(%22form%22)%3B%0A%20%20%20%20const%20newNewInput%20%3D%20document.getElementById(%22new-new%22)%3B%0A%20%20%20%20const%20majorEditsInput%20%3D%20document.getElementById(%22major-edits%22)%3B%0A%20%20%20%20const%20minorEditsInput%20%3D%20document.getElementById(%22minor-edits%22)%3B%0A%20%20%20%20const%20calculateButton%20%3D%20document.getElementById(%22calculate%22)%3B%0A%20%20%20%20const%20resultOutput%20%3D%20document.getElementById(%22number%22)%3B%0A%0A%20%20%20%20if%20(form)%20%7B%0A%20%20%20%20%20%20form.addEventListener(%22submit%22%2C%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20calculateButton.addEventListener(%22click%22%2C%20function%20(e)%20%7B%0A%20%20%20%20%20%20e.preventDefault()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Parse%20input%20values%0A%20%20%20%20%20%20const%20newNew%20%3D%20parseFloat(newNewInput.value)%20%7C%7C%200%3B%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20weeks%0A%20%20%20%20%20%20const%20majorEdits%20%3D%20parseFloat(majorEditsInput.value)%20%7C%7C%200%3B%20%20%20%20%2F%2F%20weeks%0A%20%20%20%20%20%20const%20minorEditsDays%20%3D%20parseFloat(minorEditsInput.value)%20%7C%7C%200%3B%20%2F%2F%20days%0A%0A%20%20%20%20%20%20%2F%2F%20Convert%20minor%20edits%20from%20days%20to%20weeks%0A%20%20%20%20%20%20const%20minorEditsWeeks%20%3D%20minorEditsDays%20%2F%207%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Total%20original%20time%20(in%20weeks)%0A%20%20%20%20%20%20const%20totalTime%20%3D%20newNew%20%2B%20majorEdits%20%2B%20minorEditsWeeks%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Total%20Webflow%20time%20saved%0A%20%20%20%20%20%20const%20webflowTimeSaved%20%3D%20(newNew%20*%200.94)%20%2B%20((majorEdits%20%2B%20minorEditsWeeks)%20*%200.80)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Final%20percentage%20saved%0A%20%20%20%20%20%20const%20percentSaved%20%3D%20totalTime%20%3E%200%0A%20%20%20%20%20%20%20%20%3F%20(webflowTimeSaved%20%2F%20totalTime)%20*%20100%0A%20%20%20%20%20%20%20%20%3A%200%3B%0A%0A%20%20%20%20%20%20resultOutput.textContent%20%3D%20percentSaved.toFixed(1)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
