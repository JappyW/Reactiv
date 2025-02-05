import {
  HEX_COLOR_REGEX,
  IMG_REGEX,
  INVALID_COLOR_MESSAGE,
  INVALID_URL_MESSAGE,
  MAX_BUTTON_BORDER_RADIUS,
  MAX_BUTTON_LABEL,
  MAX_BUTTON_PADDING,
  MAX_ITEMS_PER_PAGE,
  MAX_TEXTAREA_DESCRIPTION_LENGTH,
  MAX_TEXTAREA_TITLE_LENGTH,
  MIN_BUTTON_BORDER_RADIUS,
  MIN_BUTTON_LABEL,
  MIN_BUTTON_PADDING,
  MIN_ITEMS_PER_PAGE,
  MIN_TEXTAREA_DESCRIPTION_LENGTH,
  MIN_TEXTAREA_TITLE_LENGTH,
} from "@/constants";
import {
  CarouselAlignmentEnum,
  CarouselModeEnum,
  CarouselOrientationEnum,
} from "@/constants/enums";
import { z } from "zod";

export const buttonFormSchema = z.object({
  label: z
    .string()
    .min(MIN_BUTTON_LABEL, `Label must ${MIN_BUTTON_LABEL} characters or more`)
    .max(MAX_BUTTON_LABEL, `Label must ${MAX_BUTTON_LABEL} characters or less`),
  link: z.string().url(INVALID_URL_MESSAGE).optional(),
  bgColor: z.string().regex(HEX_COLOR_REGEX, INVALID_COLOR_MESSAGE),
  labelColor: z.string().regex(HEX_COLOR_REGEX, INVALID_COLOR_MESSAGE),
  borderRadius: z.coerce
    .number()
    .gte(MIN_BUTTON_BORDER_RADIUS, `Must be ${MIN_BUTTON_BORDER_RADIUS}% or more`)
    .lte(MAX_BUTTON_BORDER_RADIUS, `Must be ${MAX_BUTTON_BORDER_RADIUS}% or less`),
  padding: z.coerce
    .number()
    .gte(MIN_BUTTON_PADDING, `Must be ${MIN_BUTTON_PADDING}px and more`)
    .lte(MAX_BUTTON_PADDING, `Must be ${MAX_BUTTON_PADDING}px and less`),
});

export const carouselFormSchema = z.object({
  image: z.string().regex(IMG_REGEX, INVALID_URL_MESSAGE).optional().or(z.literal("")),
  itemsPerPage: z.coerce
    .number()
    .gte(MIN_ITEMS_PER_PAGE, `Must be ${MIN_ITEMS_PER_PAGE} characters or more`)
    .lte(MAX_ITEMS_PER_PAGE, `Must be ${MAX_ITEMS_PER_PAGE} characters or less`),
  mode: z.nativeEnum(CarouselModeEnum),
  orientation: z.nativeEnum(CarouselOrientationEnum),
  alignment: z.nativeEnum(CarouselAlignmentEnum),
  autoplay: z.boolean(),
  loop: z.boolean(),
});

export const textareaFormSchema = z.object({
  title: z
    .string()
    .min(MIN_TEXTAREA_TITLE_LENGTH, `Title must ${MIN_TEXTAREA_TITLE_LENGTH} characters or more`)
    .max(MAX_TEXTAREA_TITLE_LENGTH, `Title must ${MAX_TEXTAREA_TITLE_LENGTH} characters or less`),
  description: z
    .string()
    .min(
      MIN_TEXTAREA_DESCRIPTION_LENGTH,
      `Description must ${MIN_TEXTAREA_DESCRIPTION_LENGTH} characters or more`
    )
    .max(
      MAX_TEXTAREA_DESCRIPTION_LENGTH,
      `Description must ${MIN_TEXTAREA_DESCRIPTION_LENGTH} characters or less`
    ),
  titleColor: z.string().regex(HEX_COLOR_REGEX),
  descriptionColor: z.string().regex(HEX_COLOR_REGEX, INVALID_COLOR_MESSAGE),
});
