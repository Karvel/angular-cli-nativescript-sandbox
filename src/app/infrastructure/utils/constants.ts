export interface IPattern {
	EMAIL_REGEX: RegExp;
}

export interface IConstant {
	patterns: IPattern;
}

export const Constants: IConstant = {
	patterns:
	{
		EMAIL_REGEX: /^[a-z0-9!#$%&'*+\/=?^_\`{|}~.-]+@[a-z0-9]([a-z0-9-])+(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
	},
};
