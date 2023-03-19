<?php

class Topicapplicationcheckbox extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $topicapplicationcheckbox_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $description;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicapplicationcheckbox");
        $this->hasMany('topicapplicationcheckbox_id', 'TopicapplicationTopicapplicationcheckbox', 'topicapplicationcheckbox_id', ['alias' => 'TopicapplicationTopicapplicationcheckbox']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicapplicationcheckbox';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicapplicationcheckbox[]|Topicapplicationcheckbox|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicapplicationcheckbox|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
