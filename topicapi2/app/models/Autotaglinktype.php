<?php

class Autotaglinktype extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $autotaglinktype_id;

    /**
     *
     * @var string
     */
    public $urlsnippet;

    /**
     *
     * @var string
     */
    public $type;

    /**
     *
     * @var string
     */
    public $tag_id;

    /**
     *
     * @var string
     */
    public $linktype_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("autotaglinktype");
        $this->belongsTo('linktype_id', 'Linktype', 'linktype_id', ['alias' => 'Linktype']);
        $this->belongsTo('tag_id', 'Tag', 'tag_id', ['alias' => 'Tag']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'autotaglinktype';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Autotaglinktype[]|Autotaglinktype|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Autotaglinktype|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
