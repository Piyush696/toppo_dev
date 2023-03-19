<?php

class McTemplate extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $mcTemplate_id;

    /**
     *
     * @var string
     */
    public $status_id;

    /**
     *
     * @var string
     */
    public $rejectionreason_id;

    /**
     *
     * @var string
     */
    public $appliesto;

    /**
     *
     * @var string
     */
    public $isCron;

    /**
     *
     * @var string
     */
    public $dropdownname;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $subject;

    /**
     *
     * @var string
     */
    public $body;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("mc-template");
        $this->hasMany('mc-template_id', 'McSubject', 'mc-template_id', ['alias' => 'McSubject']);
        $this->belongsTo('rejectionreason_id', 'Rejectionreason', 'rejectionreason_id', ['alias' => 'Rejectionreason']);
        $this->belongsTo('status_id', 'Status', 'status_id', ['alias' => 'Status']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'mc-template';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return McTemplate[]|McTemplate|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return McTemplate|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
