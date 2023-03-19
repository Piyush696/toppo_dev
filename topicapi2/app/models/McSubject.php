<?php

class McSubject extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $mcSubject_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var string
     */
    public $mcTemplate_id;

    /**
     *
     * @var integer
     */
    public $relatedto_subject_id;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("mc-subject");
        $this->hasMany('mc-subject_id', 'McMessage', 'mc-subject_id', ['alias' => 'McMessage']);
        $this->hasMany('mc-subject_id', 'McParticipant', 'mc-subject_id', ['alias' => 'McParticipant']);
        $this->belongsTo('mc-template_id', 'Mc-template', 'mc-template_id', ['alias' => 'McTemplate']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'mc-subject';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return McSubject[]|McSubject|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return McSubject|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
