// app/learn/html/[section]/[topic]/contentMap.js
import IntroContent from "./contents/IntroContent";
import WorkingContent from "./contents/WorkingContent";
import InstallationContent from "./contents/InstallationContent";
import ExecutionContent from "./contents/ExecutionContent";
import PageStructureContent from "./contents/PageStructureContent";
import TagsContent from "./contents/TagsContent";
import ElementsContent from "./contents/ElementsContent";
import AttributesContent from "./contents/AttributesContent";
import CommentsPage from "./contents/Comments";
import IdClassesPage from "./contents/Id-Classes";
import SkeletalTagsContent from "./contents/SkeletalTagsContent";
import HeadingTagsContent from "./contents/HeadingTagsContent";
import ParagraphTagContent from "./contents/ParagraphTagContent";
import HrTagContent from "./contents/HrTagContent";
import BrTagContent from "./contents/BrTagContent";
import AnchorTagContent from "./contents/AnchorTagContent";
import ImageTagContent from "./contents/ImageTagContent";
import PreTagContent from "./contents/PreTagContent";
import InlineElementsContent from "./contents/InlineElementsContent";
import BlockElementsContent from "./contents/BlockElementsContent";
import {
  OrderedListContent,
  UnorderedListContent,
  DefinitionListContent,
} from "./contents/ListsTopicsContent";
import { TableTagContent, MoreOnTableContent } from "./contents/TablesTopicsContent";
import {
  FormTagContent,
  InputTagContent,
  TextareaSelectContent,
  MoreOnFormsContent,
} from "./contents/FormsTopicsContent";
import {
  MetaTagContent,
  LinkScriptTagContent,
  VideoAudioTagContent,
  SvgInHtmlContent,
  IframesInHtmlContent,
} from "./contents/HeadMediaTopicsContent";
import {
  CodeTagContent,
  SemanticTagsContent,
  CanvasTagContent,
  GlobalAttributesContent,
  EntitiesInHtmlContent,
  QuotationTagsContent,
  ObsoleteTagsContent,
  CharacterSetsContent,
} from "./contents/MiscTopicsContent";

export const htmlContentMap = {
  introduction: {
    intro: IntroContent,
    working: WorkingContent,
    installation: InstallationContent,
    execution: ExecutionContent,
    pagestructure: PageStructureContent,
    tags: TagsContent,
    elements: ElementsContent,
    attributes: AttributesContent,
    comments: CommentsPage,
    id_classes: IdClassesPage,
  },
  "basic-tags": {
    "skeletal-tags": SkeletalTagsContent,
    "heading-tags": HeadingTagsContent,
    "paragraph-tag": ParagraphTagContent,
    "hr-tag": HrTagContent,
    "br-tag": BrTagContent,
    "anchor-tag": AnchorTagContent,
    "image-tag": ImageTagContent,
    "pre-tag": PreTagContent,
  },
  "inline-block-elements": {
    "inline-elements": InlineElementsContent,
    "block-elements": BlockElementsContent,
  },
  "lists-in-html": {
    "ordered-list": OrderedListContent,
    "unordered-list": UnorderedListContent,
    "definition-list": DefinitionListContent,
  },
  "tables-in-html": {
    "table-tag": TableTagContent,
    "more-on-table": MoreOnTableContent,
  },
  "forms-in-html": {
    "form-tag": FormTagContent,
    "input-tag": InputTagContent,
    "textarea-select": TextareaSelectContent,
    "more-on-forms": MoreOnFormsContent,
  },
  "head-element": {
    "meta-tag": MetaTagContent,
    "link-script-tag": LinkScriptTagContent,
  },
  "html-media": {
    "video-audio-tag": VideoAudioTagContent,
    "svg-in-html": SvgInHtmlContent,
    "iframes-in-html": IframesInHtmlContent,
  },
  "miscellaneous-tags": {
    "code-tag": CodeTagContent,
    "semantic-tags": SemanticTagsContent,
    "canvas-tag": CanvasTagContent,
    "global-attributes": GlobalAttributesContent,
    "entities-in-html": EntitiesInHtmlContent,
    "quotation-tags": QuotationTagsContent,
    "obsolete-tags": ObsoleteTagsContent,
    "character-sets": CharacterSetsContent,
  },
};
