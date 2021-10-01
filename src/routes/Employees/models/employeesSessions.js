export const sessions = {
    avatar: [
        {
            field: 'avatar',
            label: "employees.avatar",
            variant: 'Avatar',
            listResultId: 1
        },
    ],
    personal:
        [
            {
                field: '_id',
                label: "employees.id",
                variant: 'TextField',
                required: true,
                listResultId: 2
            },
            {
                field: 'firstName',
                label: "employees.first-name",
                variant: 'TextField',
                required: true,
                listResultId: 3
            },
            {
                field: 'lastName',
                label: "employees.last-name",
                variant: 'TextField',
                required: true
            },
            {
                field: 'jobTitle',
                label: "employees.job-title",
                variant: 'TextField',
                required: true,
                listResultId: 4
            },
            {
                field: 'email',
                label: "employees.email",
                variant: 'TextField',
                required: true,
                listResultId: 5
            },
        ],
    contact: [
        {
            field: 'workPhone',
            label: "employees.work-phone",
            variant: 'TextField',
            required: true,
            listResultId: 6
        },
        {
            field: 'homePhone',
            label: "employees.home-phone",
            variant: 'TextField',
            required: false
        },
        {
            field: 'mobilePhone',
            label: "employees.mobile-phone",
            variant: 'TextField',
            required: true
        },
    ],
    address: [
        {
            field: 'country',
            label: "employees.country",
            variant: 'TextField',
            required: true,
            listResultId: 7
        },
        {
            field: 'street',
            label: "employees.street",
            variant: 'TextField',
            required: true
        },
        {
            field: 'city',
            label: "employees.city",
            variant: 'TextField',
            required: true
        },
        {
            field: 'state',
            label: "employees.state-province",
            variant: 'TextField',
            required: true
        },
        {
            field: 'zipCode',
            label: "employees.zip-postal-code",
            variant: 'string',
            required: true
        }
    ],
    notes: [
        {
            field: 'notes',
            label: "employees.notes",
            variant: 'TextField',
            required: false,
            multiline: true
        }
    ]
}