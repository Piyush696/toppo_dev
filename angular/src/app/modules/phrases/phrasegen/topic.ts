export class Topic {
    topic_id: string;
    topic: string;
    link: string;
}

export class Topicsynonym_group {
    synonym_group_id: string;
    topic_id: string;
}

export class Topicsynonym_row {
    synonym_group_id: string;
    topic_id: string;
    synonym_row_id: string;
    synonym_row_operator: string;
}

export class Topicsynonym_term {
    topic_id: string;
    synonym_group_id: string;
    synonym_row_id: string;
    synonym_term: string;
    synonym_term_operator: string;
}