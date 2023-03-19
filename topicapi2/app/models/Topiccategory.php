<?php

class Topiccategory extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topiccategory_id;

    /**
     *
     * @var string
     */
    public $topiccategorytype;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     *
     * @var string
     */
    public $datetimemodified;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topiccategory");
        $this->hasMany('topiccategory_id', 'TabLearnMain', 'learnabout_topiccategory_id', ['alias' => 'TabLearnMain']);
        $this->hasMany('topiccategory_id', 'TopicTopiccategory', 'topiccategory_id', ['alias' => 'TopicTopiccategory']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topiccategory';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topiccategory[]|Topiccategory|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topiccategory|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
